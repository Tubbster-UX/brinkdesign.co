'use client';

import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming you have a Button component from ShadCN

interface PaginationControlsProps {
  page: number;
  totalPages: number;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({ page, totalPages }) => {
  return (
    <div className="flex justify-between items-center mt-8 space-x-4">
      <Button 
        variant="outline" 
        disabled={page <= 1} 
        onClick={() => window.location.href = `?page=${page - 1}`}
        className="disabled:opacity-50"
      >
        {'<'} Previous
      </Button>
      <span className="text-sm text-gray-600">
        Page {page} of {totalPages}
      </span>
      <Button 
        variant="outline" 
        disabled={page >= totalPages} 
        onClick={() => window.location.href = `?page=${page + 1}`}
        className="disabled:opacity-50"
      >
        Next {'>'}
      </Button>
    </div>
  );
};

export default PaginationControls;