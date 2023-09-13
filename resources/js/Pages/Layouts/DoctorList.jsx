import DoctorItems from '../Components/DoctorItems';
import HorizontalCategoryItems from '../Components/HorizontalCategoryItems';

export default function Wall(props){

    return (
        <>
            <div className="overflow-x-scroll mt-[60px] no-scrollbar">
                {props.show != 'noshow' && <HorizontalCategoryItems />}
            </div>
            <DoctorItems />

        </>
    );
}
