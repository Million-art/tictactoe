import React from 'react'
import './Board.scss';
import Square from './Square';
function Board() {
    const  [boxs ,setBox]=React.useState(['','','','','','','','',''])
    const [player , setPlayer]=React.useState('X')
  
    const onclick=(sqr)=>{
        setBox(boxs.map((value,index)=>{
                if(index=== sqr && value===''){
                    return player
                }
                    return value
                
            })
        )
         if(player==='X'){
            setPlayer('O')
    
           }
           else{
            setPlayer('X')
        }
    }

 
    

    return (
    <div className='board'>
        <div className='board-row'>
        
           <Square value={boxs[0]}onclick={()=>onclick(0)} />
           <Square value={boxs[1]}onclick={()=>onclick(1)} />
           <Square value={boxs[2]}onclick={()=>onclick(2)} />

        </div>

        <div className='board-row'>
           
           <Square value={boxs[3]}onclick={()=>onclick(3)} />
           <Square value={boxs[4]}onclick={()=>onclick(4)} />
           <Square value={boxs[5]}onclick={()=>onclick(5)} />
       
        </div>

        <div className='board-row'>
          
           <Square value={boxs[6]}onclick={()=>onclick(6)} />
           <Square value={boxs[7]}onclick={()=>onclick(7)} />
           <Square value={boxs[8]}onclick={()=>onclick(8)} />
 
        </div>
    </div>
  )
}

export default Board