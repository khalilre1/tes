import { createFileRoute } from '@tanstack/react-router'
import { useMemo, useState } from 'react'
import { Eraser, RotateCcw } from 'lucide-react'
import { PageShell } from '@/components/PageShell'
import {
  findConflicts,
  generatePuzzle,
  isBoardComplete,
  type Board,
} from '@/lib/sudoku'

export const Route = createFileRoute('/sudoku')({
  component: SudokuPage,
})

function SudokuPage() {
  const [{ puzzle }, setGame] = useState(() => generatePuzzle())
  const [board, setBoard] = useState<Board>(() => puzzle.map((row) => [...row]))
  const [selected, setSelected] = useState<[number, number] | null>(null)

  const givenCells = useMemo(() => {
    const cells = new Set<string>()
    puzzle.forEach((row, r) =>
      row.forEach((value, c) => {
        if (value !== 0) cells.add(`${r}-${c}`)
      }),
    )
    return cells
  }, [puzzle])

  const conflicts = useMemo(() => findConflicts(board), [board])
  const complete = useMemo(() => isBoardComplete(board), [board])
  const won = complete && conflicts.size === 0

  function newGame() {
    const next = generatePuzzle()
    setGame(next)
    setBoard(next.puzzle.map((row) => [...row]))
    setSelected(null)
  }

  function setCellValue(value: number) {
    if (!selected) return
    const [row, col] = selected
    if (givenCells.has(`${row}-${col}`)) return
    setBoard((prev) => {
      const next = prev.map((r) => [...r])
      next[row][col] = value
      return next
    })
  }

  return (
    <PageShell title="Sudoku">
      <div className="flex flex-col items-center gap-5">
        {won && (
          <div className="w-full rounded-xl border border-amber-400 bg-amber-500/20 text-amber-200 text-center py-2 text-sm font-semibold">
            Bravo, grille compl&eacute;t&eacute;e ! 🔥
          </div>
        )}

        <div className="grid grid-cols-9 w-full max-w-[360px] aspect-square border-2 border-amber-400/70 rounded-lg overflow-hidden bg-black/50">
          {board.map((row, r) =>
            row.map((value, c) => {
              const key = `${r}-${c}`
              const isGiven = givenCells.has(key)
              const isConflict = conflicts.has(key)
              const isSelected = selected && selected[0] === r && selected[1] === c
              return (
                <button
                  key={key}
                  onClick={() => setSelected([r, c])}
                  className={[
                    'flex items-center justify-center text-base sm:text-lg font-semibold aspect-square border border-amber-500/15',
                    c % 3 === 0 ? 'border-l-2 border-l-amber-400/60' : '',
                    r % 3 === 0 ? 'border-t-2 border-t-amber-400/60' : '',
                    isGiven ? 'text-white/90' : 'text-amber-300',
                    isConflict ? 'bg-red-900/50 text-red-300' : '',
                    isSelected ? 'bg-amber-500/25' : '',
                  ].join(' ')}
                >
                  {value !== 0 ? value : ''}
                </button>
              )
            }),
          )}
        </div>

        <div className="grid grid-cols-5 gap-2 w-full max-w-[360px]">
          {Array.from({ length: 9 }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              onClick={() => setCellValue(n)}
              className="rounded-lg border border-amber-500/40 bg-black/40 text-white font-semibold py-3 hover:bg-amber-500/15"
            >
              {n}
            </button>
          ))}
          <button
            onClick={() => setCellValue(0)}
            className="rounded-lg border border-amber-500/40 bg-black/40 text-amber-300 flex items-center justify-center py-3 hover:bg-amber-500/15"
            aria-label="Effacer"
          >
            <Eraser className="w-4 h-4" />
          </button>
        </div>

        <button
          onClick={newGame}
          className="flex items-center gap-2 text-amber-300/90 text-sm font-medium mt-2"
        >
          <RotateCcw className="w-4 h-4" />
          Nouvelle grille
        </button>
      </div>
    </PageShell>
  )
}
