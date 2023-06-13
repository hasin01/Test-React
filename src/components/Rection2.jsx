import "../index.css"


export const Rection = props => {

    return (
      <>
      <div className="section">
      <div className="wraper">
   <div className="name">{props.name}</div>
   <div className="surname">{props.surname}</div>
   </div>
   <div className="age">{props.age}</div>
   </div>
      </>

    );
  };