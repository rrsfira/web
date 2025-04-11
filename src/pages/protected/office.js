import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import Office from '../../features/socialization/offices'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Perkantoran"}))
      }, [])


    return(
        <Office />
    )
}

export default InternalPage