export default function SkillCard({ skill:{name,url}}) {
  return (
    <>
      <img src={url} alt={name+"-logo"} />
      <h3>{name} </h3>
    </>
  );
}
