module Overrides
  class RegistrationsController < DeviseTokenAuth::RegistrationsController

    # def create
    #   super
    # end

    def sign_up_params
       params.require(:user).permit(:name, :email,
        :password, :password_confirmation,
        work_preferences_attributes: [:image_name],
        leisure_preferences_attributes: [:image_name],
        dislike_preferences_attributes: [:image_name],
        patterns_dislike_preferences_attributes: [:image_name],
        cost_preferences_attributes: [:image_name])
    end

  end
end
