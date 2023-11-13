import White from '#/white-handshake.svg'
import Please from '#/please.svg'
import Google from '#/google.svg'

export default function SigninPage() {
  return (
    <>
      <div className="flex items-center justify-center gap-4">
        <White />
        <Please />
      </div>
      <div className="flex items-center gap-4 bg-base-bright-light py-3 px-4 rounded-xl w-72 shadow-md cursor-pointer">
        <Google />
        <h1 className="font-semibold text-lg opacity-60">Log In with Google</h1>
      </div>
    </>
  )
}
