class ApplicationController < ActionController::API
  #include ActionController::MimeResponds
	#respond_to :json
	# Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  include DeviseTokenAuth::Concerns::SetUserByToken
  # protect_from_forgery with: :null_session

end
