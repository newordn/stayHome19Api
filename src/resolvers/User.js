const quarantaines= async (parent,args,context,info)=>{
    const quarantaines = await context.prisma.user({id:parent.id}).quarantaines({orderBy:'id_DESC'})
    return quarantaines
}

module.exports={
    quarantaines
}