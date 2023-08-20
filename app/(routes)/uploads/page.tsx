"use client";

import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'react-hot-toast';
import PrescriptionForm from '@/app/(routes)/uploads/components/prescription-form';
import Container from '@/components/ui/container';

const Upload:React.FC=()=>{
  const router = useRouter();

  return(
    <Container>
      <h1>Prescription Upload</h1>
      <PrescriptionForm/>
    </Container>
  )
}
export default Upload;