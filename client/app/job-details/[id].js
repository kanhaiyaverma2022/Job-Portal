import React ,{useCallback,useState}from 'react';
import { View, Text, SafeAreaView,ActivityIndicator, RefreshControl, ScrollView } from 'react-native';
import {Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics} from '../../components'
import { COLORS, icons,SIZES } from '../../constants';
import useFetch from '../../hooks/useFetch';
import { useGlobalSearchParams, useRouter,Stack } from 'expo-router';
import { left,share } from '../../constants/icons';

const tabs = ["About", "Qualification", "Responsibilities"];

const jobDetails = () => {

    const params = useGlobalSearchParams();
    const router = useRouter();
    const [refreshing, setRefreshing] = useState(false);
    const [activeTab, setActiveTab]= useState(tabs[0]);

    const onRefresh=()=>useCallback(()=>{
      setRefreshing(true);
      refetch()
      setRefreshing(false)

    },[])
    const {data , isLoading,error,refetch}= useFetch('job-details',{
        job_id:params.id
    })
    const displayTabContent=()=>{

      switch(activeTab){
        case "Qualification":
          return <Specifics title="Qualifications" points={data?.[0]?.job_highlights?.Qualifications ?? ["N/A"]} />;
        case "About":
          return <JobAbout info={data?.[0]?.job_description ?? "No data provided"} />
        case "Responsibilities":
          return <Specifics title="Responsibilities" points={data?.[0]?.job_highlights?.Responsibilities ?? ["N/A"]} />;
         default:
          break;   

      }
    }
  return (
    <SafeAreaView style={{flex:1, backgroundColor:COLORS.lightWhite}}>
        <Stack.Screen
        options={{headerStyle:{backgroundColor:COLORS.lightWhite},
        headerShadowVisible:false,
        headerBackVisible:false,
        headerLeft:()=>(
            <ScreenHeaderBtn
            iconUrl={left}
            dimension={"60%"}
            handlePress={()=>router.back()}/>
        ),
        headerRight:()=>(
            <ScreenHeaderBtn
            iconUrl={share}
            dimension={"60%"}
            handlePress={()=>router.back()}/>
        ),
        headerTitle:""
        
        }}>

        </Stack.Screen>
     
      <>
      <ScrollView showsVerticalScrollIndicator={false} 
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
        {
          isLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />):
            error ?(
              <Text>Something went wrong</Text>):
              data.length===0 ?
              (
                <Text>No data found</Text>
              )
            :(
              <View style={{padding:SIZES.medium,paddingBottom:100}}>
              <Company
              companyLogo={data?.[0].employer_logo}
              jobTitle={data?.[0].job_title}
              companyName={data?.[0].employer_name}
              location={data?.[0]?.job_country}/>
              <JobTabs 
              tabs={tabs} 
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              />
              {displayTabContent()}
              </View>
            )
        }

      </ScrollView>
      <JobFooter url={data[0]?.job_google_link ?? 'https://www.google.com/about/careers/applications/'}/>
      </>
    </SafeAreaView>
  )
}

export default jobDetails
