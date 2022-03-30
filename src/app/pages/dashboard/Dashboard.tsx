import { useCallback, useState } from "react";

interface ITarefa {
  id: number;
  title: string;
  isCompleted: boolean;

}
export const Dashboard = () => {
  const [lista, setLista] = useState<ITarefa[]>([]);

  const handleInputkeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback ((e) =>{
    if(e.key=== 'Enter') {
      if(e.currentTarget.value.trim().length === 0) return;

      const value = e.currentTarget.value;

      e.currentTarget.value = ''; // limpa o input depois do enter

      setLista((oldLista)=> {
        if (oldLista.some((ListItem)=>ListItem.title===value)) return oldLista;
        return [
          ...oldLista,
          {
            id: oldLista.length,
            title:value,
            isCompleted: false
          }
          ];
      });
    }
  },[]);

  return (
    <div>
      <p>Lista</p>

      <input
      onKeyDown={handleInputkeyDown} />

      <p>{lista.filter((ListItem)=>ListItem.isCompleted).length}</p>

      <ul>
        {lista.map((ListItem,index) => {
          return <li key={ListItem.id}>          
            <input 
            type="checkbox" 
            checked={ListItem.isCompleted}
            onChange={() => {
              setLista(oldLista => {
                return oldLista.map(oldListItem => {
                  const newIsSelected = oldListItem.title === ListItem.title
                    ? !oldListItem.isCompleted
                    : oldListItem.isCompleted;
                    return {
                      ...oldListItem,
                      isSelected: newIsSelected,
                    };
                });
              });
            }}
        />
            {ListItem.title}
            </li>;
        })}
      </ul>
    </div>
  );
};
