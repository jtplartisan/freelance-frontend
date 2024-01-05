
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'


export default function Protected() {
  const router=useRouter()
  const auth=useSelector(state=>state.auth)
  return (
    (auth.login == true) ? router.push('../tickets') :router.push('../signin')
  )
}
