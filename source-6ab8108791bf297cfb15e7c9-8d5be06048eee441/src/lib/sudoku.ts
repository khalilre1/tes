export type Board = Array<Array<number>>

function emptyBoard(): Board {
  return Array.from({ length: 9 }, () => Array(9).fill(0))
}

function shuffled<T>(arr: Array<T>): Array<T> {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

function isValidPlacement(board: Board, row: number, col: number, num: number): boolean {
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === num || board[i][col] === num) return false
  }
  const boxRow = Math.floor(row / 3) * 3
  const boxCol = Math.floor(col / 3) * 3
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      if (board[boxRow + r][boxCol + c] === num) return false
    }
  }
  return true
}

function fillBoard(board: Board): boolean {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        for (const num of shuffled([1, 2, 3, 4, 5, 6, 7, 8, 9])) {
          if (isValidPlacement(board, row, col, num)) {
            board[row][col] = num
            if (fillBoard(board)) return true
            board[row][col] = 0
          }
        }
        return false
      }
    }
  }
  return true
}

export function generateSolvedBoard(): Board {
  const board = emptyBoard()
  fillBoard(board)
  return board
}

const DIFFICULTY_CLUES_REMOVED = 45

export function generatePuzzle(cellsToRemove: number = DIFFICULTY_CLUES_REMOVED): {
  puzzle: Board
  solution: Board
} {
  const solution = generateSolvedBoard()
  const puzzle = solution.map((row) => [...row])

  const positions = shuffled(
    Array.from({ length: 81 }, (_, i) => [Math.floor(i / 9), i % 9] as const),
  )

  for (let i = 0; i < cellsToRemove && i < positions.length; i++) {
    const [row, col] = positions[i]
    puzzle[row][col] = 0
  }

  return { puzzle, solution }
}

export function isBoardComplete(board: Board): boolean {
  return board.every((row) => row.every((cell) => cell !== 0))
}

export function findConflicts(board: Board): Set<string> {
  const conflicts = new Set<string>()

  const markIfDuplicate = (cells: Array<[number, number]>) => {
    const seen = new Map<number, [number, number]>()
    for (const [r, c] of cells) {
      const value = board[r][c]
      if (value === 0) continue
      if (seen.has(value)) {
        const [pr, pc] = seen.get(value)!
        conflicts.add(`${pr}-${pc}`)
        conflicts.add(`${r}-${c}`)
      } else {
        seen.set(value, [r, c])
      }
    }
  }

  for (let row = 0; row < 9; row++) {
    markIfDuplicate(Array.from({ length: 9 }, (_, c) => [row, c] as [number, number]))
  }
  for (let col = 0; col < 9; col++) {
    markIfDuplicate(Array.from({ length: 9 }, (_, r) => [r, col] as [number, number]))
  }
  for (let boxRow = 0; boxRow < 3; boxRow++) {
    for (let boxCol = 0; boxCol < 3; boxCol++) {
      const cells: Array<[number, number]> = []
      for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
          cells.push([boxRow * 3 + r, boxCol * 3 + c])
        }
      }
      markIfDuplicate(cells)
    }
  }

  return conflicts
}
