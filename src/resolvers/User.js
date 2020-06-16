const quarantaines= async (parent,args,context,info)=>{
    const quarantaines = await context.prisma.user({id:parent.id}).quarantaines()
    return quarantaines
}

module.exports={
    quarantaines
}