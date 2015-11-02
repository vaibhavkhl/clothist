require "rails_helper"

RSpec.describe SizeProfilesController, :type => :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/size_profiles").to route_to("size_profiles#index")
    end

    it "routes to #new" do
      expect(:get => "/size_profiles/new").to route_to("size_profiles#new")
    end

    it "routes to #show" do
      expect(:get => "/size_profiles/1").to route_to("size_profiles#show", :id => "1")
    end

    it "routes to #edit" do
      expect(:get => "/size_profiles/1/edit").to route_to("size_profiles#edit", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/size_profiles").to route_to("size_profiles#create")
    end

    it "routes to #update" do
      expect(:put => "/size_profiles/1").to route_to("size_profiles#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/size_profiles/1").to route_to("size_profiles#destroy", :id => "1")
    end

  end
end
