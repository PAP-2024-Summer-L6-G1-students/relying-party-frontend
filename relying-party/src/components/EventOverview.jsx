import './EventOverview.css'

export default function EventOverview() {
    return (
        <>
            <div className='organizer'>
                <input type="text" placeholder='Organizer Name:' className='organizer-name'/>
                <input type="text" placeholder='Organizer Contact:' className='organizer-contact'/>
            </div>
            <input type="text" placeholder='Description:' className='description'/>
        </>
    )
}