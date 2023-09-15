import DoctorItems from '../Components/DoctorItems';
import HorizontalCategoryItems from '../Components/HorizontalCategoryItems';

export default function Wall(props){

    return (
        <>
            <div className="overflow-x-scroll mt-3 no-scrollbar">
                {props.show != 'noshow' && <HorizontalCategoryItems />}
            </div>

            <div className={props.show == 'noshow' ? 'mt-[50px]' : ''}>
                <DoctorItems />
            </div>
        </>
    );
}
