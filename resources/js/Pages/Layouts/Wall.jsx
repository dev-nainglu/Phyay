import DoctorItems from '../Components/DoctorItems';
import CategoryItems from '../Components/CategoryItems';
import AppLayout from '../AppLayout';

import React from 'react';

export default function Wall(props) {
  return (
    <>
      <AppLayout>
        <div style={{ marginBottom: '20px', fontSize: '18px', fontWeight: '600' }}>
          <h2>Doctor Specialities</h2>
          <CategoryItems />
        </div>
        <div style={{ marginBottom: '40px', fontSize: '18px', fontWeight: '600' }}>
          <h2>Top Doctors</h2>
          <DoctorItems />
        </div>
      </AppLayout>
    </>
  );
}

