require 'rails_helper'

RSpec.describe "SizeProfiles", :type => :request do
  describe "GET /size_profiles" do
    it "works! (now write some real specs)" do
      get size_profiles_path
      expect(response.status).to be(200)
    end
  end
end
