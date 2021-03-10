# movieql

GraphQL 장점

Over-fetching 방지
DB에서 필요없는 정보까지 받아오게 됨

Under-fetching 방지
어플에 다양한 정보를 띄워주려면 각각 요청해야 함
하나를 완성하기 위해 과하게 많은 소스를 요청하게 됨

한 쿼리에 정확히 원하는 정보만 받을 수 있다!

URL 체계 X 종점만 있다..!

EX)

query{
    feed {
        comments
        likeNumber
    }
    notifications {
        isRead
    }
    user {
        username
        profilePic
    }
}

이걸 백엔드에 보내면 정보를 담은 object가 돌아옴 <- 자바스크립트

Resolvers

