type ProfileCardProps = {
    name?:string;
    year:number;
    job?:string;
}
const ProfileCard = (props: ProfileCardProps) => {
    const {name, year, job} = props;

    return (
        <div className="card">
            <p>Nama : {name || "ans"}</p>
            <p>Birthday : 12april {year}</p>
        
            {job && <p>Job : {job}</p>}
        </div>
    );
};

export default ProfileCard;