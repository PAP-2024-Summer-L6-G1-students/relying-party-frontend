import './EventOverview.css'

export default function EventOverview() {
    return (
        <div id='event-overview-section'>
            <div className='organizer'>
                <div className='form-field'>
                    <label htmlFor="organizer-name" className='field-label'>Organizer Name:</label>
                    <input type="text" id='organizer-name' className='organizer-name'/>
                </div>
                <div className='form-field'>
                    <label htmlFor="organizer-contact" className='field-label'>Organizer Contact:</label>
                    <input type="text" id='organizer-contact' className='organizer-contact'/>
                </div>
            </div>
            <div className='form-field'>
                <label htmlFor="description" className='field-label'>Description:</label>
                <input type="text" id='description' className='description'/>
            </div>
        </div>
    )
}