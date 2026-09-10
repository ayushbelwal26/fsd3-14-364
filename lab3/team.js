let teams = [
    {id:1,
    tname:"Assemblers",
    tl : "Ayush Belwal",
    email: "ayushbelwal261@gmail.com",
    members : 6 ,
    },
    {id:2,
    tname:"Curious Coders",
    tl : "Ayush Kirti Singh",
    email: "ayushkirti261@gmail.com",
    members : 6 ,
    },
];

let nextid = 3;
export const getAllTeams =  () => teams;
export const getTeamById = (id) => teams.find((team) => team.id === id);
export const addTeam = (newTeam => {
    const team = {id:nextid++ , newTeam};
    team.push(team);
    return team;
});

export const updateTeamById = (id,updateTeam) =>{
    const team = getTeamById(id);
    if(!team) return null;
    Object.assign(team,updateTeam);
    return team;
};

export const deleteTeam = (id) => {
    const index = teams.findIndex((team)=>team.id === id);
    if(index === -1) return false;
    teams.splice(index,1);
    return true;
};