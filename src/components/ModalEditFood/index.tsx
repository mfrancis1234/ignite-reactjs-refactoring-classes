import { createRef } from "react";
import { FiCheckSquare } from "react-icons/fi";

import { Form } from "./styles";
import { Modal } from "../Modal";
import Input from "../Input";
import { FormHandles } from "@unform/core";
import { IFood } from "../Food";

interface ModalEditFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleUpdateFood: (food: IFood) => void;
  editingFood: IFood;
}

export function ModalEditFood({
  isOpen,
  setIsOpen,
  handleUpdateFood,
  editingFood,
}: ModalEditFoodProps) {
  const formRef = createRef<FormHandles>();

  const handleSubmit = async (data: IFood) => {
    handleUpdateFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name='image' placeholder='Cole o link aqui' icon={undefined} />

        <Input name='name' placeholder='Ex: Moda Italiana' icon={undefined} />
        <Input name='price' placeholder='Ex: 19.90' icon={undefined} />

        <Input name='description' placeholder='Descrição' icon={undefined} />

        <button type='submit' data-testid='edit-food-button'>
          <div className='text'>Editar Prato</div>
          <div className='icon'>
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}
