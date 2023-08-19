"use client";

import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'react-hot-toast';
import PrescriptionForm from './components/prescription-form';
import Container from '@/components/ui/container';

const Upload:React.FC=()=>{
  const router = useRouter();

  const handleSave =()=>{
    toast.success("Prescription Saved Successfully");
    router.push('/');
  }
  return(
    <Container>
      <h1>Prescription Upload</h1>
      <PrescriptionForm onsave={handleSave}/>
    </Container>
  )
}
export default Upload;