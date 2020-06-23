const userSetPhone = async (parent,args,context,info)=>{
    console.log('userSetPhone mutation')
    let user = await context.prisma.user({phone:args.phone})
    if(!user)
      user = await context.prisma.createUser({phone:args.phone,password:"",position:"",name:""})
    return user
}

const userSetPassword = async (parent,args,context,info)=>{
    console.log('userSetPassword mutation')
     const user = await context.prisma.updateUser({data:{password:args.password},where:{id:args.user}})
    return user
}

const userSetPosition = async (parent,args,context,info)=>{
    console.log('userSetPosition mutation')
     const user = await context.prisma.updateUser({data:{position:args.position},where:{id:args.user}})
    return user
}

const userSetName = async (parent,args,context,info)=>{
    console.log('userSetName mutation')
     const user = await context.prisma.updateUser({data:{name:args.name},where:{id:args.user}})
    return user
}
const userSetNote= async (parent,args,context,info)=>{
    console.log('userSetNote mutation')
     const user = await context.prisma.updateUser({data:{note:args.note},where:{id:args.user}})
    return user
}
const quarantaine= async (parent,args,context,info)=>{
    console.log('userSetQuarantaine mutation')
    const image = await context.storeUpload(args.image)
    const quarantaine = await context.prisma.createQuarantaine({...args,user:{connect:{id:args.user}},image:image.path})
    return quarantaine
}

module.exports={
    userSetPhone,
    userSetPassword,
    userSetPosition,
    userSetName,
    userSetNote,
    quarantaine
}