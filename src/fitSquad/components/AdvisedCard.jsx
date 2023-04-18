

export const AdvisedCard = ({ img, advisedNum, advisedCategory }) => {
  return (
    <>
            <section className='AdvisedContainer rounded-sm'>
                <div className='p-3 bg-secondary rounded-full'>
                    <img className='w-6' src={ img } alt="" />
                </div>
                <div>
                    <p className='AdvisedItem'>{ advisedNum }</p>
                    <p className='text-xs'>{ advisedCategory }</p>
                </div>
            </section>
    </>
  )
}
