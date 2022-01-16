import '../../style.css';

export default function User({user, getUserId}) {

  return (
    <div className={'oneUser'}>
      {user.id} {user.name}
<button onClick={()=>getUserId(user.id)}>DETAIS</button>
    </div>
  );
}