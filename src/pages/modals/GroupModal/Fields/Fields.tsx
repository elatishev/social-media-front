import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../../../../components/Inputs/Input";
import { useAddGroupMutation } from "../groupModalApi";

interface IFormInputs {
  groupName?: string;
  groupDesc?: string;
}

const Fields = () => {
  const [addGroup] = useAddGroupMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    addGroup(data).unwrap();
  };

  return (
    <div>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("groupName", {
            required: true,
          })}
          id="groupName"
          type="text"
          label="Group's name"
          name="groupName"
        />
        {errors.groupName && "Group's name is required"}
        <Input
          {...register("groupDesc", {
            required: true,
            minLength: 4,
          })}
          id="groupDesc"
          type="text"
          label="Group's description"
          name="groupDesc"
        />
        {errors.groupDesc && <p>Must contains at least 4 symbols</p>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default Fields;
