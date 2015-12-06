class BoxController < ApplicationController

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

  def update
    @box = Box.find(params[:id])
    if @box.update(box_product_params)
      render json: @box
    else
      render json: @box.errors
    end
  end

  def get_box_by_unique_identifier
    @box = Box.find_by_unique_identifier(params[:unique_identifier])
    render json: @box
  end

  def create_box_by_admin
    @box = Box.new(box_product_params)
    @box.save
    render json: @box
  end

  private
    def box_params
      params.require(:box).permit(:user_id, :delivery_date_requested,
        :return_datetime, :special_instructions)
    end

    def user_params
      params.require(:box).require(:user).permit(:name, :email, :password, :uid)
    end

    def box_product_params
      params.require(:box).permit(:delivery_date_requested, :return_datetime,
        :payment_method, :processed, :products_bought_cost,
          box_products_attributes: [:id, :product_id, :accepted,
          returned_product_reason_attributes: [:size, :color, :price,
            :like_it_but, :comments]
          ])
    end

end
