import React from 'react'
import styled from 'styled-components'
import { StyledInput } from '../../StyledComponents/input/Form'
import CloseIcon from '@mui/icons-material/Close';


const TagDiv = styled.div`
    display : flex;
    flex-wrap : wrap;
    align-items : flex-start;
    width : inherit;
    min-height : max-content;
    border : 1px solid grey;
    border-radius : 0.6rem;
    padding : 6px;
    margin: 0.9rem 0  1.2rem 0;

    &:focus-within{
        border : 1px solid var(--color-primary-head);
    }
    ul {
        display : flex;
        flex-wrap : wrap;
        padding : 0;
        li {
            color : #ffff;
            width : auto;
            height : 25px;
            display : flex;
            align-items : center;
            justify-content : center;
            background-color: var(--color-primary-head);
            margin : 4px;
            padding : 2px 8px;
            border-radius : 4px;
            font-size : 12px;
            i{
                margin : 2px 0 0 2px;

                &:hover{
                    cursor: pointer;
                    color : red;
                }
            }
        }
    }
`
const StyledInputTag = styled(StyledInput)`
    width : auto !important;
    margin : 0;
    margin-left : 6px; 
`



const Tags = ({tags, setTags}) => {

    const addTagHandle = (e)=>{

        if(e.target.value != ""){
            setTags([...tags, e.target.value]);
            console.log(tags);
            e.target.value = "";
        }
    }

    const removeTagHandle = (i)=>{
        console.log(tags);

        const filteres = tags.filter((item, index)=>{
            console.log(i + "==" + index);
            return i !== index;
        })

        setTags(filteres);

        console.log(filteres);

    }



  return (

    <TagDiv>
        <ul>
            {
                tags.map((item, i)=>{
                    return <li key={i} >
                    <span>{item}</span>
                    <i onClick={()=>removeTagHandle(i)} >{<CloseIcon sx={{fontSize : 16}} />}</i>
                </li>
                })
            }
        </ul>
        <StyledInputTag 
            placeholder='Press Enter to add Tag...'
            type="text"
            onKeyUp={(e)=> e.key === 'Enter' ? addTagHandle(e) : null }
        />
    </TagDiv>
    
  )
}

export default Tags