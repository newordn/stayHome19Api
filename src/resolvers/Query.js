const info = ()=> `Welcome on StayHome19`
const users = async (parent,args,context,info)=>
{
    console.log('users query')
    const users = await context.prisma.users({orderBy:'id_DESC'})
    return users
}

module.exports={
    info,
    users
}