'use client';

interface MenuItemProps {
  onClick: () => void;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, onClick }) => {
  return (
    <div onClick={onClick} className="px-6 py-4 hover:bg-neutral-100 transition font-semibold">
      {label}
    </div>
  );
};

export default MenuItem;
