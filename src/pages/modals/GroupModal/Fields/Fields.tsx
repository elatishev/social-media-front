import React from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { selectRegisteredUser } from "../../../../selectors/registrationSelectors";
import Input from "../../../../components/Inputs/Input";
import { useAddGroupMutation } from "../groupModalApi";

interface IFormInputs {
  groupName: string;
  groupDesc: string;
}

const Fields = () => {
  const [addGroup] = useAddGroupMutation();
  const { _id, username } = useSelector(selectRegisteredUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    mode: "onBlur",
  });

  const onSubmit = (data: IFormInputs) => {
    addGroup({
      ...data,
      authorId: _id,
      authorName: username,
    }).unwrap();
  };

  return (
    <>
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
    </>
  );
};

export default Fields;
