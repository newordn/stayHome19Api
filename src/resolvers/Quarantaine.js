const user= async (parent,args,context,info)=>{
    const user = await context.prisma.quarantaine({id:parent.id}).user()
    return user
}

module.exports={
    user
}