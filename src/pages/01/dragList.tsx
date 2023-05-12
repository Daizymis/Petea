import React, {useState} from "react";
import './style.scss'

type showItem = {
    id: number | string,
    text: string
}
const DragList:React.FC = () =>{
    const [list, setList] = useState<Array<showItem>>([]);
    const [dragging, setDragging] = useState<boolean>(false)
    const [draggingIndex, setDraggingIndex] = useState<number>(1)
    const [startPageY, setStartPageY] = useState<number>(0)
    const [offsetPageY, setOffsetPageY] = useState<number>(0)
    const lineHeight = 42

    const move = (arr:Array<showItem>, startIndex:number, toIndex:number) => {
        arr = arr.slice();
        arr.splice(toIndex, 0, arr.splice(startIndex, 1)[0]);
        return arr;
    }

    const handleMouseDown = (evt:any, index: number) => {
        setDragging(true);
        setStartPageY(evt.pageY);
        setDraggingIndex(index);
    }
    const handleMouseUp = () =>{
        setDragging(false);
        setStartPageY(0);
        setDraggingIndex(-1)
    }
    const handleMouseMove = (evt:any) => {
        let offset = evt.pageY - startPageY;
        if(offset > lineHeight && draggingIndex < list.length - 1) {
            offset -= lineHeight
            setList(pre => move(pre, draggingIndex, draggingIndex + 1));
            setDraggingIndex( pre => pre+1)
            setStartPageY(pre => pre + lineHeight)
        }else if (offset < -lineHeight && draggingIndex > 0) {
            offset += lineHeight
            setList(pre => move(pre, draggingIndex, draggingIndex -1))
            setDraggingIndex(pre => pre -1)
            setStartPageY(pre => pre - lineHeight)
        }
        setOffsetPageY(offset);
        return undefined
    }
    const getDraggingStyle = (index: number) => {
        if(index !== draggingIndex) return {}
        return {
            backgroundColor: 'lightsteelblue',
            transform: `transform(10px, ${offsetPageY}px`
        }
    }
    return <div className="drag-nav">
        <ul>
            {
                list.map((item, index) =>
                    <li key={item.id} onMouseDown={evt => handleMouseDown(evt, index)} style={getDraggingStyle(index)}>
                        {item.text}
                    </li>
                )
            }
        </ul>
        {
            dragging && (
                <div className="drag-mask" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}></div>
            )
        }
    </div>
}

export default DragList;
