module Overrides
  class RegistrationsController < DeviseTokenAuth::RegistrationsController

    # def create
    #   super
    # end

    def sign_up_params
       params.require(:user).permit(:name, :email,
        :password, :password_confirmation,
        work_preference_attributes: [:image_name],
        leisure_preference_attributes: [:image_name],
        dislike_preference_attributes: [:image_name],
        patterns_dislike_preference_attributes: [:image_name],
        cost_preference_attributes: [:image_name])
    end

  end
end
