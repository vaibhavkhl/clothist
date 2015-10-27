module Overrides
  class RegistrationsController < DeviseTokenAuth::RegistrationsController

    # def create
    #   super
    # end

    def sign_up_params
       params.require(:user).permit(:first_name,
        :last_name, :email, :password, :password_confirmation,
        workpreference_attributes: [:image_name],
        leisurepreference_attributes: [:image_name],
        dislikepreference_attributes: [:image_name],
        patternsdislikepreference_attributes: [:image_name],
        costpreference_attributes: [:image_name])
    end

  end
end
