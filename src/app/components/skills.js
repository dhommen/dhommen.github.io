import Image from 'next/image'

export default async function Skills() {
  return (
    <section className="text-center mt-8">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="flex flex-wrap justify-center items-center bg-grey-200">
        <Image className='m-4' src="/css3-original.svg" width={50} height={50} alt="CSS3" />
        <Image className='m-4' src="/docker-original.svg" width={50} height={50} alt="docker" />
        <Image className='m-4' src="/git-original.svg" width={50} height={50} alt="git" />
        <Image className='m-4' src="/github-original.svg" width={50} height={50} alt="github" />
        <Image className='m-4' src="/gitlab-original.svg" width={50} height={50} alt="gitlab" />
        <Image className='m-4' src="/grafana-original.svg" width={50} height={50} alt="grafana" />
        <Image className='m-4' src="/html5-original.svg" width={50} height={50} alt="html5" />
        <Image className='m-4' src="/javascript-original.svg" width={50} height={50} alt="javascript" />
        <Image className='m-4' src="/kubernetes-plain.svg" width={50} height={50} alt="kubernetes" />
        <Image className='m-4' src="/linux-original.svg" width={50} height={50} alt="linux" />
        <Image className='m-4' src="/lua-original.svg" width={50} height={50} alt="lua" />
        <Image className='m-4' src="/mongodb-original.svg" width={50} height={50} alt="mongodb" />
        <Image className='m-4' src="/mysql-original.svg" width={50} height={50} alt="mysql" />
        <Image className='m-4' src="/nextjs-original.svg" width={50} height={50} alt="nextjs" />
        <Image className='m-4' src="/nginx-original.svg" width={50} height={50} alt="nginx" />
        <Image className='m-4' src="/nodejs-original.svg" width={50} height={50} alt="nodejs" />
        <Image className='m-4' src="/postgresql-original.svg" width={50} height={50} alt="postgresql" />
        <Image className='m-4' src="/prometheus-original.svg" width={50} height={50} alt="prometheus" />
        <Image className='m-4' src="/react-original.svg" width={50} height={50} alt="react" />
        <Image className='m-4' src="/sass-original.svg" width={50} height={50} alt="sass" />
        <Image className='m-4' src="/terraform-original.svg" width={50} height={50} alt="terraform" />
        <Image className='m-4' src="/vim-original.svg" width={50} height={50} alt="vim" />
      </div>
    </section>
  )
}