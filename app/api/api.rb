class API < Grape::API
  format :json
  mount Users
end
