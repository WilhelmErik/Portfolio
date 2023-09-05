export default function SkillCard({ skill:{name,url}} :{ skill:{name:string,url:string}} ) {
  return (
    <>
      <img src={url} alt={name+"-logo"} />
      <h3>{name} </h3>
    </>
  );
}
