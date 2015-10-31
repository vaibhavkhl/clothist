class BoxController < ApplicationController

  def create
    #@user = User.find(params[:user_id])
    @box = Box.new(box_params)
    if @box.save
      render json: @box
    else
      render json: @box.errors.full_messages
    end
  end

  private
  def box_params
    params.require(:box).permit(:user_id, :delivery_date,
      :return_day, :special_instructions)
  end
end
