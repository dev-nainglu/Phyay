import DoctorItems from '../Components/DoctorItems';
import HorizontalCategoryItems from '../Components/HorizontalCategoryItems';

export default function Wall(props){

    return (
        <>
            <div className="overflow-x-scroll pt-3 no-scrollbar">
                {props.show != 'noshow' && <HorizontalCategoryItems />}
            </div>
            <div className="pt-3">
            <div className={props.show == 'noshow' ? 'mt-[50px]' : ''}>
                <DoctorItems doctors={props.doctors} />
            </div>
            </div>
        </>
    );
}
