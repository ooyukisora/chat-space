# FactoryBot.define do
#   factoery :group do
#     name {Faker::Team.name}
#   end
# end
FactoryBot.define do
  factory :group do
    name {Faker::Team.name}
  end
end