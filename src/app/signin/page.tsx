import Google from '#/google.svg'
import Please from '#/please.svg'
import White from '#/white-handshake.svg'

export default function SigninPage() {
  return (
    <>
      <div className="flex items-center justify-center gap-4">
        <White />
        <Please />
      </div>
      <div className="flex items-center gap-4 px-4 py-3 shadow-md cursor-pointer bg-base-bright-light rounded-xl w-72">
        <Google />
        <h1 className="text-lg font-semibold opacity-60">Log In with Google</h1>
      </div>
    </>
  )
}
