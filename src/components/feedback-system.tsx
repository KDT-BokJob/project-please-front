import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/textarea'

export default function FeedbackSystem() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="fixed right-4 bottom-20 z-10 h-12 rounded-full font-bold text-base text-base-bright-light bg-brand-primary-normal shadow-md">
          +
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="items-center">
          <p>화면에서 불편했던 점이 있나요?</p>
          <p>여러분의 이야기 하나한가 도움이됩니다😊</p>
        </DialogHeader>
        <Textarea
          placeholder={`이 화면을 사용하면서 어떠셨나요? 어떤 점이 편리하거나 불편했나요?
모든 기능이 명확하게 이해되었나요? 어떤 부분이 특히 어려웠나요?
이 페이지에 대한 일반적인 의견이나 제안이 있으시면 공유해주세요.
`}
          className="h-32 resize-none "
        />
        <DialogFooter className="flex flex-row justify-center sm:justify-center gap-8">
          <DialogClose asChild>
            <Button className=" h-12 rounded-lg font-bold text-base border border-brand-primary-normal text-brand-primary-normal bg-base-bright-light shadow-md">
              <p>취소</p>
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button className=" h-12 rounded-lg font-bold text-base text-base-bright-light bg-brand-primary-normal shadow-md">
              <p>리뷰 남기기</p>
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
