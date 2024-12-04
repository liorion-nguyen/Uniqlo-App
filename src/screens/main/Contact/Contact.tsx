import React from 'react';
import { Box, ScrollView, VStack, HStack, Image, Text, Button, Link, Heading } from 'native-base';
import { useNavigation } from '@react-navigation/native';

const Contact = () => {
  const navigation = useNavigation();

  const team = [
    {
      name: 'Chung',
      image: require('../../../../assets/about/avt_chung.jpg'),
      description: 'Chủ nhân của cửa hàng',
      link: 'https://www.facebook.com/chungg.203',
    },
    {
      name: 'Duy',
      image: require('../../../../assets/about/avt_duy.jpg'),
      description: 'Chủ nhân của cửa hàng',
      link: 'https://www.facebook.com/vanduy.nguyen.2003',
    },
    {
      name: 'Chinh',
      image: require('../../../../assets/about/avt_chinh.jpg'),
      description: 'Chủ nhân của cửa hàng',
      link: 'https://www.facebook.com/yukio.pham.5',
    },
    {
      name: 'Cuong',
      image: require('../../../../assets/about/avt_cuong.jpg'),
      description: 'Chủ nhân của cửa hàng',
      link: 'https://www.facebook.com/cuongdq1002',
    },
    {
      name: 'Duyen',
      image: require('../../../../assets/about/avt_duyen.jpg'),
      description: 'Chủ nhân của cửa hàng',
      link: 'https://www.facebook.com/profile.php?id=100073160363879',
    },
  ];

  return (
    <ScrollView flex={1} bg="gray.50">
      <Box p={4} bg="white">
        <Heading size="xl" textAlign="center" mb={4}>
          Về Uniqlo
        </Heading>
        <Text textAlign="center" mb={4}>
          Chào mừng bạn đến với cửa hàng thời trang Uniqlo!
        </Text>
        <Text textAlign="center" mb={4}>
          Chúng tôi cung cấp các sản phẩm thời trang chất lượng cao và phong cách hiện đại.
        </Text>
      </Box>

      <VStack space={4} p={4}>
        {/* Section: Hotels */}
        <Box bg="white" shadow={2} borderRadius="lg" p={4}>
          <Image
            source={require('../../../../assets/about/hotels.png')}
            alt="Our Hotels"
            height={200}
            resizeMode="cover"
            borderRadius="md"
          />
          <Heading size="md" mt={4}>
            Cửa hàng của chúng tôi
          </Heading>
          <Text mt={2} color="gray.600">
            Cửa hàng của chúng tôi là một cửa hàng bán thời trang và các sản phẩm liên quan đến thời trang.
          </Text>
          <Button mt={4} colorScheme="primary" >
            Tìm hiểu thêm
          </Button>
        </Box>

        {/* Section: Tours */}
        <Box bg="white" shadow={2} borderRadius="lg" p={4}>
          <Image
            source={require('../../../../assets/about/tours.png')}
            alt="Our Tours"
            height={200}
            resizeMode="cover"
            borderRadius="md"
          />
          <Heading size="md" mt={4}>
            Sản phẩm thời trang
          </Heading>
          <Text mt={2} color="gray.600">
            Chúng tôi cung cấp nhiều loại sản phẩm thời trang khác nhau để bạn có thể chọn lựa.
          </Text>
          <Button mt={4} colorScheme="primary" >
            Tìm hiểu thêm
          </Button>
        </Box>
      </VStack>

      {/* Section: Mission */}
      <Box bg="gray.100" p={6} borderRadius="lg" mx={4} mt={4}>
        <Heading size="lg" color="primary.800" mb={4}>
          Mục đích của chúng tôi
        </Heading>
        <Text color="gray.700" fontSize="md" mb={4}>
          Mục đích của chúng tôi là cung cấp những sản phẩm thời trang chất lượng cao cho khách hàng.
        </Text>
        <Text color="gray.700" fontSize="sm">
          Mục đích của chúng tôi là cung cấp những sản phẩm thời trang chất lượng cao cho khách hàng.
        </Text>
      </Box>

      {/* Section: Team */}
      <Box p={4} mt={6}>
        <Heading size="lg" mb={4} textAlign="center">
          Nhóm chúng tôi
        </Heading>
        <VStack space={4}>
          {team.map((member, index) => (
            <Box key={index} bg="white" shadow={2} borderRadius="lg" p={4} alignItems="center">
              <Link href={member.link} isExternal>
                <Image
                  source={member.image}
                  alt={member.name}
                  size="xl"
                  borderRadius="full"
                  mb={4}
                />
              </Link>
              <Text fontWeight="bold" fontSize="lg">
                {member.name}
              </Text>
              <Text textAlign="center" color="gray.600">
                {member.description}
              </Text>
            </Box>
          ))}
        </VStack>
      </Box>

      {/* Section: Contact */}
      <Box p={4} mt={6}>
        <Heading size="lg" mb={4} textAlign="center">
          Liên hệ với chúng tôi
        </Heading>
        <Text textAlign="center">
          Nếu bạn có bất kỳ câu hỏi hoặc ý kiến đóng góp nào, vui lòng liên hệ với chúng tôi qua email.
        </Text>
      </Box>
    </ScrollView>
  );
};

export default Contact;
