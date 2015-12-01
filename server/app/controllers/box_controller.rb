class BoxController < ApplicationController
  require 'pry'

  def index
   @boxes = Box.all
   render json: @boxes, each_serializer: BoxSerializer
 end

  def show
    @box = Box.find(params[:id])

    render json: @box
  end
  
  def create
    @box = Box.new(box_params)
    if @box.save
      render json: @box
    else
      render json: @box.errors.full_messages
    end
  end

  def create_box_by_admin
    # @user = User.new(user_params)
    # @user.save
    @box = Box.new(box_product_params)
    @box.save
    render json: @box
  end

  private
    def box_params
      params.require(:box).permit(:user_id, :delivery_date,
        :return_day, :special_instructions)
    end

    def user_params
      params.require(:box).require(:user).permit(:name, :email, :password, :uid)
    end

    def box_product_params
      params.require(:box).permit(:delivery_date_actual,
        box_products_attributes: [:product_id])
    end

end
