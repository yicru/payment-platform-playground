import { Plus } from 'lucide-react'
import { Page } from '~/components/page'

export default function DashboardIndex() {
  return (
    <Page title={'ホーム'}>
      <div className="rounded-lg border border-border bg-card px-6">
        <div className="py-6 border-b">
          <p className="text-lg font-medium">テナント一覧</p>
        </div>
        <div className="py-6">
          <div className="relative flex w-full flex-col items-center justify-center gap-6 overflow-hidden rounded-lg border border-border bg-secondary px-6 py-24 dark:bg-card">
            <div className="z-10 flex max-w-[460px] flex-col items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/20 bg-card hover:border-primary/40">
                <Plus className="h-8 w-8 stroke-[1.5px] text-primary/60" />
              </div>
              <div className="flex flex-col items-center gap-2">
                <p className="text-base font-medium text-primary">
                  テナントを作成する
                </p>
                <p className="text-center text-xs font-normal text-primary/60">
                  支払いを受け付けるためにテナントを作成しましょう
                </p>
              </div>
            </div>
            <div className="base-grid absolute h-full w-full opacity-40" />
            <div className="absolute bottom-0 h-full w-full bg-gradient-to-t from-[hsl(var(--card))] to-transparent" />
          </div>
        </div>
      </div>
    </Page>
  )
}
