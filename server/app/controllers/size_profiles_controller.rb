class SizeProfilesController < ApplicationController
  before_action :set_size_profile, only: [:show, :edit, :update, :destroy]

  respond_to :json

  def index
    @size_profiles = SizeProfile.all
    render json: @size_profiles
  end

  def show
    render json: @size_profile
  end

  def new
    @size_profile = SizeProfile.new
    render json: @size_profile
  end

  def edit
  end

  def create
    @size_profile = SizeProfile.new(size_profile_params)
    @size_profile.save
    render json: @size_profile
  end

  def update
    @size_profile.update(size_profile_params)
    render json: @size_profile
  end

  def destroy
    @size_profile.destroy
    render json: @size_profile
  end

  private
    def set_size_profile
      @size_profile = SizeProfile.find(params[:id])
    end

    def size_profile_params
      params.require(:size_profile).permit(:tshirt_size, :tshirt_brand, :shirt_size, :shirt_brand, :shirt_fit, :trouser_size, :trouser_brand, :trouser_fit, :height, :weight, :skin_color, :user_id)
    end
end
